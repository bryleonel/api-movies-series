# Documentacion APIs

# Endpoints :
## --> http://localhost:3000/api/movies
## --> http://localhost:3000/api/series

## MOVIES

_Links de acceso a la api :_

### Listado completo de películas --> http://localhost:3000/api/movies 
// muestra listado completo de películas

### Detalle de película --> http://localhost:3000/api/movies/:id 
// donde /id será el mismo id correspondiente a cada película

// _ejemplo_ --> http://localhost:3000/api/movies/1

### Agregar nueva película --> http://localhost:3000/api/movies/create 
// agregar nueva película, teniendo en cuenta los siguientes campos : 
    { title, rating, awards, release_date, length } 


## SERIES
_Links de acceso a la api :_

### Listado completo de series --> http://localhost:3000/api/series 
// muestra listado completo de series

### Detalle de serie --> http://localhost:3000/api/series/:id 
// donde /id será el mismo id correspondiente a cada serie
// _ejemplo_--> http://localhost:3000/api/series/1

### Agregar nueva serie --> http://localhost:3000/api/series/create 
// agregar nueva serie , teniendo en cuenta los siguientes campos : 
    { title, release_date, end_date}


