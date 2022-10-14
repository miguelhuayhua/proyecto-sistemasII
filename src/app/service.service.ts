import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn:'root'
})
export class ApiService{
    constructor(private http:HttpClient){

    }
    public postInfo(ci:number):void{
        let dataForm = new FormData();
        dataForm.append('ci',ci.toString())
        this.http.post('url',dataForm).subscribe({next:(res)=>{
            console.log(res)
        },error:(error)=>{
            console.log(error)
        }})
    }
}


