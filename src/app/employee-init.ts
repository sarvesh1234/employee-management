export class Init {
    load() {
        if(localStorage.getItem('employees') === null || localStorage.getItem('employees') == undefined) {
            let emps = [
              {
                id:1,
                firstName:'Prashant',
                Salary: 12000,
                position: "Lead Engineer",
                age: 27
              }, 
              {
                id:2,
                firstName:'Abhishek',
                Salary: 13000,
                position: "Engineer",
                age: 27
              }
            ];
      
            localStorage.setItem('employees', JSON.stringify(emps));
            return 
          } else {
            console.log('Found employees...');
          }
    }
}