import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
   export class ProjectService{
        public url: string;

        constructor(
            private _http: HttpClient
        ){
            this.url = Global.url;
        }

        testService(){
            return 'Probando el servicio de Angular';
        }


        // funcion para guardar en la bd luego de consumir la api
        saveProject(project:Project): Observable<any>{
            const params = JSON.stringify(project);
            const headers = new HttpHeaders().set('Content-Type', 'application/json');
            return this._http.post(this.url + 'save-project', params, {headers: headers});
        }

        //Funcion para obtener el listado de los proyectos desde la bd
        getProjects(): Observable<any>{
            let headers = new HttpHeaders().set('Content-type','application/json');
            return this._http.get(this.url+'projects', {headers:headers});
        }

        //Funcion par obtener un unico proyecto
        getProject(id): Observable<any>{
            let headers = new HttpHeaders().set('Content-type','application/json');
            return this._http.get(this.url+'project/'+ id, {headers:headers});
        }

        //Funcion para borrar un proyecto
        deleteProject(id): Observable<any>{
            let headers = new HttpHeaders().set('Content-type','application/json');
            return this._http.delete(this.url+'project/'+ id, {headers:headers});
        }

        //Funcion para actualizar proyecto
        updateProject(project): Observable<any>{
            let params = JSON.stringify(project);
            let headers = new HttpHeaders().set('Content-type','application/json');
            return this._http.put(this.url+'project/'+project._id, params, {headers:headers});
        }
   }  
 