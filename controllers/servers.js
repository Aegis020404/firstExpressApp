let servers = [
    {id: 1, name: 'AWS', status: 'working'},
    {id: 2, name: 'Goggle Clouds', status: 'working'},
    {id: 3, name: 'Yandex Clouds', status: 'working'},
    {id: 4, name: 'Microsoft', status: 'pending'},
]


export const getAll = (req, res) => {
    res.status(200).json(servers)
}

export const create = (req, res) => {
    let newServer = {
        id: Date.now().toString(),
        ...req.body
    }
    servers.push(newServer)
    res.status(201).json(newServer)
}

export const deleteServer = (req, res) => {
    servers = servers.filter(s => req.params.id !== s.id)
    res.json({message: "Server has been removed."})
}