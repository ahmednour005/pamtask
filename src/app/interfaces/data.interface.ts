export interface AddComment {
    "status": string,
    "totalResults": number,
    "articles": [
        {
            "source": {
                "id": string,
                "name": string
            },
            "author": string,
            "title": string,
            "description": string,
            "url": string,
            "urlToImage": string,
            "publishedAt": string,
            "content": string
        }
    ]
}
    

export class Comments{
    
    public name:  string;
    public email: string;
    public message: string;
    constructor(data:any){
        this.name=data.name;
       this.email=data.email;
       this.message=data.message;
    }
}