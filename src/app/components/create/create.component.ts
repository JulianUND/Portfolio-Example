import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';
import { UploadService } from '../../service/upload.service';
import { Global } from '../../service/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  // Objeto que modificara el formulario
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public save_project;
  public url: string;
   
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) { 
    this.title = 'Crear proyecto';
    this.project = new Project('','','','','2020','','');
    this.url = Global.url;
  }

  ngOnInit(): void {
  }


  onSubmit(form){
    // Guardar los datos
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          // subir la imagen
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id,[],this.filesToUpload,'image')
            .then((result:any) => {
              this.save_project = result.project;
              this.status = 'success';
              form.reset();
            });
          }else{
              this.save_project = response.project;
              this.status = 'success';
              form.reset();
          }
        }else{
          this.status = 'failed';
        }
      },
        error => {
          console.log(<any>error);
        }
      );
    }
    fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
    }
  }

