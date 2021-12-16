import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  barChartData: any;

  doughnutChartData: any;

  msgs: any[];

  employees: any = [{ Id: 1, Name: 'Nilav', Email: '.net@gmail.com', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: 26 },
  { Id: 2, Name: 'Nilav1', Email: '.net@gmail.com', DepartmentId: 1, Address: 'Surat, Gujarat', Age: 25 },
  { Id: 3, Name: 'Nilav2', Email: 'PHP@gmail.com', DepartmentId: 4, Address: 'Ahmedabad, Gujarat', Age: 25 },
  { Id: 4, Name: 'Nilav3', Email: '.net@gmail.com', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: 30 },
  { Id: 5, Name: 'Nilav4', Email: 'HR@gmail.com', DepartmentId: 2, Address: 'Baroda, Gujarat', Age: 25 },
  { Id: 6, Name: 'Nilav5', Email: 'HR@gmail.com', DepartmentId: 2, Address: 'Ahmedabad, Gujarat', Age: 28 },
  { Id: 7, Name: 'Nilav6', Email: 'Admin@gmail.com', DepartmentId: 3, Address: 'Ahmedabad, Gujarat', Age: 26 },
  { Id: 8, Name: 'Nilav7', Email: '.net@gmail.com', DepartmentId: 1, Address: 'Surat, Gujarat', Age: 25 },
  { Id: 9, Name: 'Nilav8', Email: '.net@gmail.com', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: 27 },
  { Id: 10, Name: 'Nilav9', Email: 'Admin@gmail.com', DepartmentId: 3, Address: 'Baroda, Gujarat', Age: 25 },
  { Id: 11, Name: 'Nilav10', Email: '.net@gmail.com', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: 35 },
  ];
  columns = [
    { field: 'Name', header: 'Name' },
    { field: 'Email', header: 'Email' },
    { field: 'Address', header: 'Address' },
    { field: 'Age', header: 'Age' }
  ];
  pageSize: number = 5;
  constructor(private themeService: ThemeService) {
    this.barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Rejected',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Approved',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }

      ]
    }

    this.doughnutChartData = {
      labels: ['Active', 'Inactive', 'Deleted'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };

    this.msgs = [];

    // translate.get("WelcomeMessage").subscribe((text: string) => {
    //   this.msgs.push({ severity: 'success', summary: '', detail: text });
    // });

  }

  ngOnInit() {
    console.log("employee=>", this.employees)
  }
  goToDepartmentDetails(id){
this.themeService.navigationToggel.next(true);
  }
}
