import { ViewChild,Component,ChangeDetectorRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  @ViewChild(MatDrawer)
  sidenav!: MatDrawer;

  constructor(private observer: BreakpointObserver, private cd: ChangeDetectorRef,private router : Router){}
  
    ngAfterViewInit(){

      this.observer.observe(['(max-width: 800px)']).subscribe((resp: any) => {
        if(resp.matches){
          this.sidenav.mode = 'over';
          this.sidenav.close();
        }else{
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      })
      this.cd.detectChanges;
    };
    Cerrar(){
      this.router.navigateByUrl('/login')

    };



}
