let Categories = require("./../model/category");
let sequelizeInstance = require("./../config/db.config");

let createTable = async () => {
    await sequelizeInstance.sync({force: true});
    insertCategories();
    console.log("Table created successfully")
}

let insertCategories = async () => {
    await Categories.bulkCreate([
        {
            name : "Fashion"
        },
        {
            name : "Mobile"
        },
        {
            name : "Electronics"
        },
        {
            name : "Appliances"
        }
    ])
}

let getAllCategories = async (req,res,next) => {
    let categories = await Categories.findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(categories));
    res.end();
}

let getCategoryById = async (req,res,next) => {
    let id = req.params.categoryId;
    if(!id) { res.status(400).send("ID not passed")}
    let categories =  await Categories.findAll({
        where:  {
            id : id
        }
    });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(categories));
    res.end();
}

let addNewCategory = async (req,res,next) => {
    let categoryToAdd = req.body;
    await Categories.create({
        name : categoryToAdd
    });

    res.status(201).send("New category added");
    res.end();
}

let deleteCategoryById = async (req,res,next) => {
    let id = req.params.categoryId;
    await Categories.destroy({
        where : {
            categoryId : id
        }
    });

    res.status(200).send("category deleted");
    res.end();
}


// createTable();

module.exports = {  
                    getAllCategories,
                    getCategoryById,
                    addNewCategory,
                    deleteCategoryById
                }
