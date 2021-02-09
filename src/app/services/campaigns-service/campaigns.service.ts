import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICampaign } from 'src/app/__types__/ICampaign';
import { Router } from '@angular/router';
import { ERoutePaths } from 'src/app/__types__/ERoutePaths';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CampaingsService {

  constructor(
    private HttpClient: HttpClient,
    private Router: Router
  ) { }


  async getAll() {
    return await this.HttpClient.get(env.envUrl).toPromise()
      .then((data: ICampaign[]) => data)
      .catch(err => { 
        this.Router.navigate([ERoutePaths.ERROR]); 
        throw err 
      })
  }

  async getById(id: string) {
    return await this.HttpClient.get(`${env.envUrl}/${id}`).toPromise()
      .then((data: ICampaign) => data)
      .catch(err => { 
        this.Router.navigate([ERoutePaths.ERROR]); 
        throw err 
      })
  }

  async create(data: ICampaign) {
    return await this.HttpClient.post(env.envUrl, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).toPromise()
      .then((newData: ICampaign) => newData)
      .catch(err => { 
        this.Router.navigate([ERoutePaths.ERROR]); 
        throw err 
      });
  }

  async delete(id: string) {
    await this.HttpClient.delete(`${env.envUrl}/${id}`, {
      headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*'}
    }).toPromise()
      .catch(err => { 
        this.Router.navigate([ERoutePaths.ERROR]); 
        throw err 
      });
  }

  async update(id: string, newData: ICampaign) {
    await this.HttpClient.put(`${env.envUrl}/${id}`, {
      ...newData
    })
    .toPromise()
      .catch(err => { 
        this.Router.navigate([ERoutePaths.ERROR]); 
        throw err 
      });
  }
}
