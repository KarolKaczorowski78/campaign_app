import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICampaign } from 'src/app/__types__/ICampaign';

@Injectable({
  providedIn: 'root'
})
export class CampaingsService {

  constructor(private HttpClient: HttpClient) { }

  async getAll() {
    return await this.HttpClient.get('https://campaign-app-task.herokuapp.com/campaigns').toPromise()
      .then((data: ICampaign[]) => data)
      .catch(err => { throw err })
  }

  async getById(id: string) {
    return await this.HttpClient.get(`https://campaign-app-task.herokuapp.com/campaigns/${id}`).toPromise()
      .then((data: ICampaign) => data)
      .catch(err => { throw err })
  }

  async create(data: ICampaign) {
    return await this.HttpClient.post(`https://campaign-app-task.herokuapp.com/campaigns`, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).toPromise().then((newData: ICampaign) => newData);
  }

  async delete(id: string) {
    await this.HttpClient.delete(`https://campaign-app-task.herokuapp.com/campaigns/${id}`, {
      headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*'}
    }).toPromise();
  }

  async update(id: string, newData: ICampaign) {
    await this.HttpClient.put(`https://campaign-app-task.herokuapp.com/campaigns/${id}`, {
      ...newData
    })
    .toPromise();
  }
}
