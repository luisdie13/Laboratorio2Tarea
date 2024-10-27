/**     LABORATORIO II
 * 
 * Crea una nueva clase, ExtendedUser, que heredará de la clase User
 * 
 * Coloque un setter y un getter nombrados fullName en la clase.  El getter debe devolver el 
 * nombre y el apellido concatenados en un cadena. El setter toma el nombre y el apellido concatenados
 * (por ejemplo, 'Rafael Fifer') y los divide en nombre y apellido (el método split),
 * cambiando las propiedades apropiadas del objeto.
 * 
 * Basándose en la clase ExtenderUser, cree dos clases más Teacher y Student (herencia). No
 * deberían tener nuevos métodos ni propiedades, sino solo los roles predeterminados en
 * sus constructores para 'teacher' o 'student' respectivamente (es decir, sus constructores
 * tomarán tres parámetros en lugar de cuatro: name, surname y email);
 */

class User {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.courses = [];
    }

    addCourse(course, grade) {
        this.courses.push({ course, grade });
    }

    editCourse(course, grade) {
        const courseIndex = this.courses.findIndex(c => c.course === course);
        if (courseIndex !== -1) {
            this.courses[courseIndex].grade = grade;
        } else {
            this.addCourse(course, grade);
        }
    }
}

class ExtendedUser extends User {
    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    set fullName(value) {
        const [name, surname] = value.split(' ');
        this.name = name;
        this.surname = surname;
    }
}

class Teacher extends ExtendedUser {
    constructor(name, surname, email) {
        super(name, surname, email);
        this.role = 'teacher';
    }
}

class Student extends ExtendedUser {
    constructor(name, surname, email) {
        super(name, surname, email);
        this.role = 'student'; 
    }
}

/** Pruebe su solución utilizando el siguiente código:
 */
let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.editCourse('chemistry', 4);
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fife: 1 courses
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`); // -> Paula Thompkins: 2 courses
student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fifer: 1 courses