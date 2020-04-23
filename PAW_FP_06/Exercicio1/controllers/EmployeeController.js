var mongoose = require("mongoose");
var Employee = require("../models/Employee");

var employeeController = {};

employeeController.list = async function(req, res) {
    try {
        const employeesList = await Employee.find()
        res.render('employees', { employees: employeesList })
    } catch (e) {
        res.render('employees', { employee: [] })
    }
};

//Show employee by id
employeeController.show = async function(req, res) {
    console.log('ID', req.params.id)
    const employeeResult = await Employee.findById(req.params.id);
    res.render('employees/show', { employee: employeeResult })
};

//Create employee
employeeController.create = function(req, res) {
    res.render("employees/create");
};

//Save new employee
employeeController.save = async function(req, res) {
    try {
        const result = await Employee.create(req.body)
        res.redirect(`/employees/show/${ result._id }`)
    } catch (e) {
        res.send('error')
    }
};


//Edit an employee
employeeController.edit = async function(req, res) {
    const employee = await Employee.findById(req.params.id)

    res.render('employees/edit', {
        employee
    })
};

//Update an employee
employeeController.update = async function(req, res) {
    const result = await Employee.findById(req.params.id)

    res.render = await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/employees/show/${ req.params.id }`)
};

//Delete an employee
employeeController.delete = function(req, res) {
    Employee.remove({ _id: req.params.id }, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Employee deleted!");
            res.redirect("/employees");
        }
    });
};

employeeController.listPositions = async function(req, res) {
    try {
        const filters = {}
        if (req.query.salary) {
            filters.salary = {
                $gte: parseFloat(req.query.salary)
            }
        }
        if (req.query.position) {
            filters.position = req.query.position
        }
        const employeesList = await Employee.find(filters)
        res.render('employees', { employees: employeesList, filters: req.query })
    } catch (e) {
        res.render('employees', { employees: [] })
    }

}

module.exports = employeeController;