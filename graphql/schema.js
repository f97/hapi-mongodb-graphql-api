const graphql = require('graphql');
const BookType = require('./BookType');
const Book = require('../models/Book');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql ;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLString}},
            resolve(parent, args){
                return Book.findById(args.id); 
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})