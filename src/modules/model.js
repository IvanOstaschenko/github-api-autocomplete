import {logPlugin} from "@babel/preset-env/lib/debug";

export default class Model {
    constructor(view) {
        this.view = view;
        this.repositories = [];
    }

    async getDataAndSave(queryText) {
        const response = await fetch(`https://api.github.com/search/repositories?q=${queryText}&per_page=5`);
        const data = await response.json();
        this.repositories = [...data.items];
    }

    async updateSearch(query) {
        if (query.trim()) {
            await this.getDataAndSave(query);
        } else{
            this.repositories.length = 0;
        }
        this.view.updateSearch(this.makeDataForUpdateSearch());
    }

    updateResult(index) {
        this.view.updateResult(
            this.makeDataForUpdateResult(
                this.repositories[index]
            )
        )
    }
    makeDataForUpdateSearch(){
        return this.repositories.reduce((acc,item,i)=>{
            acc.push({
                name:item.name,
                arrIndex: i
            });
            return acc;
        },[])
    }
    makeDataForUpdateResult(item){
        return {
            name: item.name,
            owner: item.owner.login,
            stars: item.stargazers_count
        }
    }
}
