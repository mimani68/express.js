'use strict';


/**
 * 
 * @class database
 * @description main database setting
 * 
 */
class database {

    constructor(){
        this.loadDependency('sql');
    }

    loadDependency(dataBase){
        switch (dataBase) {

            case 'mongo':
                this.mongoose = require('mongoose');
                break;
                
            case 'sql':
                this.sql = require('sequelize');
                break;
        
            default:
                break;
        }
    }

}


class Cats extends database{
    
    constructor(){
        super();
        this.modelName = 'Cat';
        this.checkConnection();
        this.createModel();
        this.saveNewRecord({ name: 'sina'});
    }

    checkConnection(){
        this.mongoose.connect('mongodb://localhost/test2')
            .then(_=>console.log('connecting to `mongodb`'))
            .catch(_=>console.log('connecting to DB FAILED'));
    }
    
    saveNewRecord(params) {
        const e = new this.model(params);
        e.save().then(() => console.log('new record save'));
    }
    
    showLastCats(){
        
    }
    
    createModel(modelStructureObject){

        if ( !modelStructureObject ) {
            this.model = this.mongoose.model(this.modelName, { name: String });
        } else {
            this.model = this.mongoose.model(this.modelName, modelStructureObject);
        }

    }

}

const a = new Cats();


// module.exports.Cats;