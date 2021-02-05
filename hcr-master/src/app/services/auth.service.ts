import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private status : boolean;
  
  constructor(private http: HttpClient) { }



  register(user): Observable<any> {
    console.log(user);
    return this.http.post("http://localhost:8080/api/v1/users/addUser", {
      username: user.username,
      email: user.email,
      password: user.password,
      question1: user.question1,
      ans1: user.dropdown,
      question2: user.question2,
      ans2 : user.dropdowns
    }, httpOptions);
  }

  validateUser(email : string) : Observable<User>
{
  
return this.http.get<User>(`http://localhost:8080/api/v1/users/validateUser/${email}`) ;
}

setBearerToken(token : string)
{
   localStorage.setItem('bearerToken',token);
}

setStatus ( status : boolean )
{
  this.status=status;
}
getStatus () : boolean
{
  return this.status;
}
setName(email : string){
  sessionStorage.setItem('email',email);
}

getName(){
 return sessionStorage.getItem('email');
}
signOut(){
  window.localStorage.clear();
  window.sessionStorage.clear();
}

getBearerToken()
{
  return localStorage.getItem('bearerToken');
}
getUser(email: string): Observable<User>
{
return this.http.get<User>(`http://localhost:8080/api/v1/users/getuser/${email}`) 
}

updatePassword(email:string,password: string): Observable<User>
{
return this.http.post<User>(`http://localhost:8080/api/v1/users/update/${email}`,password); 
}


}
