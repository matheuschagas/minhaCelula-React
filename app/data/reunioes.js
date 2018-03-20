

class ReuniaoController {
    static reunioes = [];
    static loaded = false;




    static load() {
        return new Promise((resolve) => {
            this.reunioes = [{
                "data" : "2017-08-17T02:07:36.861Z",
                "horaFim" : "2017-08-18T00:21:46.610Z",
                "horaInicio" : "2017-08-18T23:06:38.442Z",
                "local" : "Mac Silva Só",
                "obs" : "Combinamos um jejum, devocional e oração pela mãe do Paulinho\n\nPedidos de Oração:\n*Mãe do Paulinho\n*Bruno amigo do Edu que foi preso orar pela saude dele e que ele encontre Deus\n",
                "presenca" : [ {
                    "causa" : "",
                    "name" : "Douglas Marrane",
                    "presente" : true
                }, {
                    "causa" : "",
                    "name" : "Eliseu Spido",
                    "presente" : true
                }, {
                    "causa" : "",
                    "name" : "Paulo",
                    "presente" : true
                }, {
                    "causa" : "",
                    "name" : "Eduardo",
                    "presente" : true
                }, {
                    "causa" : "Foi de carona pra casa",
                    "name" : "Assis",
                    "presente" : false
                }, {
                    "causa" : "",
                    "name" : "Fernando",
                    "presente" : false
                }, {
                    "causa" : "",
                    "name" : "Misael Tugne",
                    "presente" : true
                } ],
                "tema" : "Cura"
            },
                {
                    "data" : "2017-08-25T03:02:59.263Z",
                    "horaFim" : "00:09",
                    "horaInicio" : "22:32",
                    "local" : "Mc Silva Só",
                    "presenca" : [ {
                        "causa" : "",
                        "name" : "Douglas Marrane",
                        "presente" : true
                    }, {
                        "causa" : "",
                        "name" : "Eliseu Spido",
                        "presente" : true
                    }, {
                        "causa" : "",
                        "name" : "Paulo",
                        "presente" : true
                    }, {
                        "causa" : "Doença",
                        "name" : "Eduardo",
                        "presente" : false
                    }, {
                        "causa" : "Carona",
                        "name" : "Assis",
                        "presente" : false
                    }, {
                        "causa" : "",
                        "name" : "Fernando",
                        "presente" : false
                    }, {
                        "causa" : "",
                        "name" : "Misael Tugne",
                        "presente" : true
                    } ],
                    "tema" : "PLANEJADO PARA AGRADAR A DEUS"
                },
                {
                    "data" : "2017-08-30T02:43:29.669Z",
                    "horaFim" : "23:55",
                    "horaInicio" : "22:45",
                    "local" : "Mc do naldo",
                    "presenca" : [ {
                        "causa" : "",
                        "name" : "Douglas Marrane",
                        "presente" : true
                    }, {
                        "causa" : "",
                        "name" : "Eliseu Spido",
                        "presente" : true
                    }, {
                        "causa" : "",
                        "name" : "Paulo",
                        "presente" : true
                    }, {
                        "causa" : "Video casamento do irmao",
                        "name" : "Eduardo",
                        "presente" : false
                    }, {
                        "causa" : "Aula",
                        "name" : "Assis",
                        "presente" : false
                    }, {
                        "causa" : "",
                        "name" : "Fernando",
                        "presente" : true
                    }, {
                        "causa" : "",
                        "name" : "Misael Tugne",
                        "presente" : true
                    } ],
                    "tema" : "Parte da familia de Deus"
                }];
            this.loaded = true;
            resolve(true);
        });
    };

    static getAll() {
        return new Promise(async (resolve)=>{
            if (!this.loaded) {
                await this.load();
            }
            resolve(this.reunioes);
        });
    };

    static getReuniao(id) {
        return new Promise( async(resolve)=>{
            if (!this.loaded) {
                await this.load();
            }
            for (let reuniao of this.reunioes) {
                if (reuniao.id === id) {
                    resolve(reuniao);
                }
            }
            resolve(false);
        });
    }

}

export default ReuniaoController;