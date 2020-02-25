export class UserModel 
{
  private id: number;
  private name: string;
  private email: string;
  public inf: info;
  
  constructor (public _id:number=0, public _nm:string, public _em:string)
    {
      this.id=_id;
      this.name=_nm;
      this.email=_em;
      this.inf = new info();
      
    }
    public get_id ()
    {
      return this.id;
    }
}  

export class info 
{
  public firstName: string;
  public lastName: string;
  public jobTitle: string;
  public avatar: string;
  public phoneNumber: string;   
  
  constructor ()
    {
      
    }
}  