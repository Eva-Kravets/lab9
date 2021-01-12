let student = {
	group: 201,
	last_name: 'Иванов',
	first_name: 'Иван'
}

console.log(`Список свойств: ${ Object.keys(student) }`);
console.log(`Студент ${ student.first_name } ${ student.last_name } учится в группе ${ student.group } `);
	