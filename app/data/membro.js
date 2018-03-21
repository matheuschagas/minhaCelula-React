class MembroController {
    static membros = [];
    static loaded = false;




    static load() {
        return new Promise((resolve) => {
            this.membros = [
                {
                    key: 1,
                    id: 1,
                    nome: 'Matheus Marrane Chagas',
                    dataNascimento: '08/05/1995',
                    cristao: true,
                    discipulado: false,
                    discipulador: '',
                    sexo: "Masculino",
                    membro: true,
                    membroDaCelula: true,
                    telefone: '(51) 99850-5401',
                    endereco: 'Rua Padre Todesco',
                    numero: '927',
                    complemento: '308B',
                    bairro: 'Partenon',
                    avatar: 'https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/18275184_1320382968037427_6124407887042667278_n.jpg?oh=660a1044fe106bf9ff04557cb28341fa&oe=5AFCF7B8',
                },
                {
                    key: 2,
                    id: 2,
                    dataNascimento: "17/02/1997",
                    cristao: true,
                    discipulado: true,
                    discipulador: "Pr. Junior",
                    membro: true,
                    membroDaCelula: false,
                    nome: "Douglas Marrane Chagas",
                    sexo: "Masculino",
                    telefone: '(51) 99850-5401',
                    endereco: 'Rua Padre Todesco',
                    numero: '927',
                    complemento: '308B',
                    bairro: 'Partenon',
                    avatar: 'https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/21077463_1506833232735529_7680200561753031190_n.jpg?oh=cfe33c516a86981ce1c7dc25a3bfdb1a&oe=5AC49F3B',
                }
            ];
            this.loaded = true;
            resolve(true);
        });
    };

    static getAll() {
        return new Promise(async (resolve)=>{
            if (!this.loaded) {
                await this.load();
            }
            resolve(this.membros);
        });
    };

    static getMembros() {
        return new Promise(async (resolve)=>{
            let membros = [];
            if (!this.loaded) {
                await this.load();
            }
            for(let membro of this.membros){
                if(membro.membroDaCelula){
                    membros.push(membro);
                }
            }
            resolve(membros);
        });
    };

    static getVisitantes() {
        return new Promise(async (resolve)=>{
            let visitantes = [];
            if (!this.loaded) {
                await this.load();
            }
            for(let membro of this.membros){
                if(!membro.membroDaCelula){
                    visitantes.push(membro);
                }
            }
            resolve(visitantes);
        });
    };

    static getMembro(id) {
        return new Promise( async(resolve)=>{
            if (!this.loaded) {
                await this.load();
            }
            for (let membro of this.membros) {
                if (membro.id === id) {
                    resolve(membro);
                }
            }
            resolve(false);
        });
    }

}

export default MembroController;