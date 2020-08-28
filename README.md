# DOCUMENTACION DE APIs

## MOVIES

_Links de acceso a la api :_

### Listado completo de películas --> http://localhost:3000/api/movies 
// json con listado completo de películas

### Detalle de película --> http://localhost:3000/api/movies/:id 
// donde /id será el mismo id correspondiente a cada película
// _ejemplo_ --> http://localhost:3000/api/movies/1

### Agregar nueva película --> http://localhost:3000/api/movies/create 
// agregar nueva película mediante POSTMAN, teniendo en cuenta los siguientes parámetos : {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        }


## SERIES
_Links de acceso a la api :_

### Listado completo de series --> http://localhost:3000/api/series 
// json con listado completo de series

### Detalle de serie --> http://localhost:3000/api/series/:id 
// donde /id será el mismo id correspondiente a cada serie
// _ejemplo_--> http://localhost:3000/api/series/1

### Agregar nueva serie --> http://localhost:3000/api/series/create 
// agregar nueva serie mediante POSTMAN, teniendo en cuenta los siguientes parámetos : {
            title: req.body.title,
            release_date: req.body.release_date,
            end_date: req.body.end_date
        }


