const Path = require('./obj')
const path_constructor = new Path("Gabriel", 18)

const data_route = [path_constructor.data, path_constructor.userQuant]
const api_route = [path_constructor.description, path_constructor.data, path_constructor.http]

module.exports = {
    path_constructor,
    data_route,
    api_route
}
