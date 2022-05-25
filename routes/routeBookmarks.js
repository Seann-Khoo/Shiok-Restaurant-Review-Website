"use strict"

const bookmarksdb = require('../Models/BookmarksDB');

var bookmarksDBObject = new bookmarksdb();

function routeBookmarks(app){
    app.route('/allbookmarks')
        .get(bookmarksDBObject.getAllBookmarks);
    app.route('/memberbookmarks/:memberID')
       .get(bookmarksDBObject.viewMemberBookmarks);
    app.route('/addnewbookmark')
        .post(bookmarksDBObject.addBookmark);
    app.route('/deletebookmark/:bookmark_id')
        .delete(bookmarksDBObject.deleteBookmark);
}
module.exports = {routeBookmarks};


