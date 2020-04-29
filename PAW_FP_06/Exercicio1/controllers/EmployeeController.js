var mongoose = require("mongoose");
var Employee = require("../models/Employee");

var employeeController = {};

//List employees
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
employeeController.delete = async function(req, res) {
    await Employee.findByIdAndDelete(req.params.id)
    res.redirect('/employees')
};

//Search for an employee
employeeController.search = async function(req, res) {
    res.render('employees/search')
};

//Search for salary
employeeController.searchSalary = async function(req, res) {
    const result = await Employee.find({ salary: { $gt: req.body.salary } });
    res.render('employees', { employees: result })
};

//Search for a certain position in the enterprise
employeeController.searchPosition = async function(req, res) {
    const result = await Employee.find({ position: req.body.position });
    res.render('employees', { employees: result })
};

module.exports = employeeController;