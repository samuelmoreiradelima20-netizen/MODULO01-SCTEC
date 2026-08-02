function loadProfile(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (id > 0) {
                resolve({
                    id: id,
                    name: "Samuel",
                    age: 25,
                    city: "São Paulo"
                });
            } else {
                reject("Perfil não encontrado.");
            }

        }, 2000);

    });
}

loadProfile(1)
    .then(profile => {
        console.log("ID:", profile.id);
        console.log("Nome:", profile.name);
        console.log("Idade:", profile.age);
        console.log("Cidade:", profile.city);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Consulta finalizada.");
    });