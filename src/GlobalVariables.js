
export const AUTH = 'AUTH'
export const STEP_UP = 'STEP_UP'
export const STEP_DOWN = 'STEP_DOWN'
export const CHOOSE_INFO = 'CHOOSE_INFO'
export const CHOOSE_LIST = 'CHOOSE_LIST'
export const CHOOSE_USER = 'CHOOSE_USER'
export const RESET = 'RESET'

export const INFOBASES_QUANTITY = 6; //max=20
export const USERS_QUANTITY = 6; //max=20

//dataBases
export function createInfoBases(num){
	return createData(num, DATABASES_ID, DATABASES_NAMES, DATABASES_DESCRIPTIONS)
}


function createData(num, arrId, arrNames, arrDesc){
	const [ID, NAMES, DESCRIPTION] = shuffle(arrId, arrNames, arrDesc);
	let result = new Array(num);
	for (let i = 0; i < result.length; i++) {
		result[i] = {id: ID[i], name: NAMES[i], description: DESCRIPTION[i]}
	}
	return result;
}

function shuffle(){
	let result = new Array(arguments.length);
	for (var i = 0; i < result.length; i++) {
		result[i] = [].concat(arguments[i]);
		result[i].sort(function(){
		  return Math.random() - 0.5;
		});
	}
	return result;
}

const DATABASES_NAMES = [
	"orchestrate", "reintermediate", "reinvent", "enable", 
	"whiteboard", "reintermediate", "visualize", "redefine", 
	"transition", "harness", "mesh", "deploy", "unleash", "visualize", 
	"benchmark", "enhance", "aggregate", "transform", "expedite", "maximize"
];

const DATABASES_ID = [
	74239, 18382, 26721, 9475, 
	31712, 82397, 47435, 24835, 
	25285, 4060, 9181, 24216, 
	36540, 76722, 37065, 40839, 
	7309, 45027, 88597, 69430
];

const DATABASES_DESCRIPTIONS = [
	"Veniam ipsum libero dignissimos. Et sit eaque sit aperiam totam libero beatae tempore aut.", 
	"Velit accusamus est voluptas eum repellendus eum d…it sed laudantium harum laborum dicta reiciendis.", 
	"Doloremque quis nihil optio cumque dolorem. Optio …st numquam assumenda qui et quaerat voluptatibus.", 
	"Illo non esse vel dolores maxime sapiente. Ab nesciunt perspiciatis.", 
	"Rem quis excepturi id aut eum nihil. Commodi vitae… Ut sint adipisci distinctio voluptatem adipisci.", 
	"Molestias sit quaerat quam neque. Quas laboriosam quo cumque labore quos quod.", 
	"Aspernatur dolore sit accusamus molestiae velit ullam. Excepturi vitae inventore omnis.", 
	"Qui provident nobis sed. Nihil ex quis aspernatur …dent modi. Dolor quia enim id nisi numquam et ut.", 
	"Sed aliquam nobis est est. Voluptatem cupiditate quasi sed. Nihil quaerat sapiente placeat.", 
	"Laboriosam et doloribus ipsa quam. Voluptas qui et…endi ab temporibus omnis. Sunt atque consequatur.", 
	"Perferendis odit molestiae vel fuga quia necessita…unt consequuntur iusto fuga quae eveniet vel vel.", 
	"Molestias dicta molestiae repellat qui possimus at…ae saepe vitae aut sit quaerat. Dicta dolores ut.", 
	"Dolrem dicta tenetur distinctio eligendi voluptat…mmodi qui amet sunt. Dolore eius fugit excepturi.", 
	"Quam provident ex dolor. Qui amet mollitia rerum m…ur et odit consectetur maxime impedit voluptatem.", 
	"Corporis quod sint ipsam qui optio sit. Sit et rat…cere suscipit doloribus ratione libero rerum qui.", 
	"Quod necessitatibus error rerum unde velit natus t…ptatem. Quos iusto voluptate recusandae suscipit.", 
	"Officiis voluptas iusto et animi ut inventore est.…erferendis voluptas sed sunt aperiam quia fugiat.", 
	"Delectus commodi vel non voluptatem voluptas. Culp…el sed sed veritatis ratione quae pariatur earum.", 
	"Quae provident asperiores aut sint aut optio nobis…o reprehenderit quo perferendis repellat numquam.", 
	"Molestiae eos aliquam eveniet quos ut aut et sint.…aque praesentium quia distinctio voluptatem vero."
];


export function createUsers(num){
	return createData(num, USERS_ID, USERS_NAMES, USERS_DESCRIPTIONS)
}

const USERS_NAMES =["Sandy", "Rosina", "Jadon", "Chyna", "Alverta", "Noah", "Clarabelle", "Ressie", "Stephany", "Dorthy", "Sim", "Ismael", "Zaria", "Crystal", "Emil", "Delfina", "Eldred", "Annette", "Mckayla", "Roberto"];
const USERS_ID = [
	174239, 118382, 126721, 19475, 
	131712, 182397, 147435, 124835, 
	125285, 14060, 19181, 124216, 
	136540, 176722, 137065, 140839, 
	17309, 145027, 188597, 169430
];

const USERS_DESCRIPTIONS = [
	"Veniam ipsum libero dignissimos. Et sit eaque sit aperiam totam libero beatae tempore aut.", 
	"Velit accusamus est voluptas eum repellendus eum d…it sed laudantium harum laborum dicta reiciendis.", 
	"Doloremque quis nihil optio cumque dolorem. Optio …st numquam assumenda qui et quaerat voluptatibus.", 
	"Illo non esse vel dolores maxime sapiente. Ab nesciunt perspiciatis.", 
	"Rem quis excepturi id aut eum nihil. Commodi vitae… Ut sint adipisci distinctio voluptatem adipisci.", 
	"Molestias sit quaerat quam neque. Quas laboriosam quo cumque labore quos quod.", 
	"Aspernatur dolore sit accusamus molestiae velit ullam. Excepturi vitae inventore omnis.", 
	"Qui provident nobis sed. Nihil ex quis aspernatur …dent modi. Dolor quia enim id nisi numquam et ut.", 
	"Sed aliquam nobis est est. Voluptatem cupiditate quasi sed. Nihil quaerat sapiente placeat.", 
	"Laboriosam et doloribus ipsa quam. Voluptas qui et…endi ab temporibus omnis. Sunt atque consequatur.", 
	"Perferendis odit molestiae vel fuga quia necessita…unt consequuntur iusto fuga quae eveniet vel vel.", 
	"Molestias dicta molestiae repellat qui possimus at…ae saepe vitae aut sit quaerat. Dicta dolores ut.", 
	"Dolorem dicta tenetur distinctio eligendi voluptat…mmodi qui amet sunt. Dolore eius fugit excepturi.", 
	"Quam provident ex dolor. Qui amet mollitia rerum m…ur et odit consectetur maxime impedit voluptatem.", 
	"Corporis quod sint ipsam qui optio sit. Sit et rat…cere suscipit doloribus ratione libero rerum qui.", 
	"Quod necessitatibus error rerum unde velit natus t…ptatem. Quos iusto voluptate recusandae suscipit.", 
	"Officiis voluptas iusto et animi ut inventore est.…erferendis voluptas sed sunt aperiam quia fugiat.", 
	"Delectus commodi vel non voluptatem voluptas. Culp…el sed sed veritatis ratione quae pariatur earum.", 
	"Quae provident asperiores aut sint aut optio nobis…o reprehenderit quo perferendis repellat numquam.", 
	"Molestiae eos aliquam eveniet quos ut aut et sint.…aque praesentium quia distinctio voluptatem vero."
];