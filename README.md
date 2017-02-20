FCC Image Search Abstraction Layer
by: lah4life

##User Story: 

I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

##User Story: 

I can paginate through the responses by adding a ?offset=2 parameter to the URL.

##User Story: 

I can get a list of the most recently submitted search strings.

##Example Search usage

https://boiling-dawn-66567.herokuapp.com/api/imageSearch/books

##Example Search with Offset usage

https://boiling-dawn-66567.herokuapp.com/api/imageSearch/books?offset=10

##Example Search result

'[{"url":"http://www.uglydogbooks.com/wp-content/uploads/2014/04/books.jpg","snippet":"... Ugly Dog Books · Website ...","thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRus5TbIy1tKDT-F5FRHGx35no2RrjFbCZjiPwvL5XBVboe6O213VsB9Co","context":"http://www.uglydogbooks.com/"},{"url":"https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAeCAAAAJDdlYjEyNzU5LTQwYjctNGExYy1hNGJlLTc5YmVkZTY3NzQ2MA.jpg","snippet":"5 Must Read Books for ...","thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKthADA_jidATK6FYny3UoXShhjyrqPbwGrKGhk-47nBOSGmnwru8giksh","context":"https://www.linkedin.com/pulse/5-must-read-books-healthcare-leaders-joe-mull-"},]'

##Search History usage

https://boiling-dawn-66567.herokuapp.com/api/latest/imageSearch/

##Example Search History result

'[{"_id":"58aa2f6305f3e3271c34e1c6","search":"books","time":"Sun Feb 19 2017 23:50:59 GMT+0000 (UTC)"},{"_id":"58aa27fe32ebc4269c3d0c10","search":"snowmobile","time":"Sun Feb 19 2017 23:19:26 GMT+0000 (UTC)"},{"_id":"58aa2610e890e1261e58fdb7","search":"snow","time":"Sun Feb 19 2017 23:11:12 GMT+0000 (UTC)"}]'