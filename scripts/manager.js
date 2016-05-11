var update_score_var_time = 100;



var update_score_var;
var update_pet_petter_score_var;
var update_pet_groomer_score_var;


function UpdateScore() {
    document.getElementById("score").innerHTML = "Score: " + parseInt(localStorage.Kitten_Petter_Score,10);
}

function PetKitten() {
	localStorage.Kitten_Petter_Score = parseInt(localStorage.Kitten_Petter_Score,10) + parseInt(localStorage.Kitten_Petter_Pet_Amount,10);
}

function AddPetPetter() {
	if(parseInt(localStorage.Kitten_Petter_Score,10) >= parseInt(localStorage.Kitten_Petter_Petter_Amount_Price,10))
	{
		localStorage.Kitten_Petter_Score = parseInt(localStorage.Kitten_Petter_Score,10) - parseInt(localStorage.Kitten_Petter_Petter_Amount_Price,10);
		localStorage.Kitten_Petter_Petter_Amount_Price =  parseInt(localStorage.Kitten_Petter_Petter_Amount_Price,10) * 2;
		document.getElementById("pet-petter-price").innerHTML = localStorage.Kitten_Petter_Petter_Amount_Price;
		if(parseInt(localStorage.Kitten_Num_Pet_Petters,10) == 0)
		{
			update_pet_petter_score_var = setInterval(UpdatePetPetterScore, parseInt(localStorage.Kitten_Petter_Score_Speed,10));
		}
		localStorage.Kitten_Num_Pet_Petters = parseInt(localStorage.Kitten_Num_Pet_Petters, 10) + 1;
	}
}

function AddPetGroomer() {
	if(parseInt(localStorage.Kitten_Petter_Score,10) >= parseInt(localStorage.Kitten_Petter_Groomer_Amount_Price,10))
	{
		localStorage.Kitten_Petter_Score -= parseInt(localStorage.Kitten_Petter_Groomer_Amount_Price,10);
		localStorage.Kitten_Petter_Groomer_Amount_Price = parseInt(localStorage.Kitten_Petter_Groomer_Amount_Price,10) * 1.5;
		document.getElementById("pet-groomer-price").innerHTML = localStorage.Kitten_Petter_Groomer_Amount_Price;
		if(parseInt(localStorage.Kitten_Petter_Num_Pet_Groomers,10) == 0)
		{
			update_pet_groomer_score_var = setInterval(UpdatePetGroomerScore, parseInt(localStorage.Kitten_Groomer_Score_Speed,10));
		}
		localStorage.Kitten_Petter_Num_Pet_Groomers = parseInt(localStorage.Kitten_Petter_Num_Pet_Groomers, 10) + 1;
	}
}

function UpdatePetPetterScore() {
	localStorage.Kitten_Petter_Score = parseInt(localStorage.Kitten_Petter_Score,10) + parseInt(localStorage.Kitten_Num_Pet_Petters,10) * 2;
}

function UpdatePetGroomerScore() {
	localStorage.Kitten_Petter_Score = parseInt(localStorage.Kitten_Petter_Score,10) + parseInt(localStorage.Kitten_Petter_Num_Pet_Groomers,10) * 100;
}

function IncreasePettingPower() {
	if(parseInt(localStorage.Kitten_Petter_Score,10) >= parseInt(localStorage.Kitten_Petter_Pet_Amount_Price,10))
	{
		localStorage.Kitten_Petter_Score = parseInt(localStorage.Kitten_Petter_Score,10) - parseInt(localStorage.Kitten_Petter_Pet_Amount_Price,10);
		localStorage.Kitten_Petter_Pet_Amount = parseInt(localStorage.Kitten_Petter_Pet_Amount) *2;
		localStorage.Kitten_Petter_Pet_Amount_Price = parseInt(localStorage.Kitten_Petter_Pet_Amount_Price) *2;
		document.getElementById("increase-petting-price").innerHTML = localStorage.Kitten_Petter_Pet_Amount_Price;
	}
}

function IncreasePetterSpeed() {
	if(parseInt(localStorage.Kitten_Petter_Score,10) >= parseInt(localStorage.Kitten_Petter_Petter_Speed_Price,10))
	{
		localStorage.Kitten_Petter_Score = parseInt(localStorage.Kitten_Petter_Score,10) - parseInt(localStorage.Kitten_Petter_Petter_Speed_Price,10);
		localStorage.Kitten_Petter_Petter_Speed_Price = parseInt(localStorage.Kitten_Petter_Petter_Speed_Price,10) *2.5
		localStorage.Kitten_Petter_Score_Speed = parseInt(localStorage.Kitten_Petter_Score_Speed,10) - (parseInt(localStorage.Kitten_Petter_Score_Speed,10) * .05);
		document.getElementById("increase-petter-speed-price").innerHTML = localStorage.Kitten_Petter_Petter_Speed_Price;
	}
}

function IncreaseGroomerSpeed() {
	if(parseInt(localStorage.Kitten_Petter_Score,10) >= parseInt(localStorage.Kitten_Petter_Groomer_Speed_Price,10))
	{
		localStorage.Kitten_Petter_Score =  parseInt(localStorage.Kitten_Petter_Score,10) - parseInt(localStorage.Kitten_Petter_Groomer_Speed_Price,10);
		localStorage.Kitten_Petter_Groomer_Speed_Price = parseInt(localStorage.Kitten_Petter_Groomer_Speed_Price,10) * 2.5
		localStorage.Kitten_Groomer_Score_Speed = parseInt(update_pet_goomer_score_var_time,10) - (parseInt(update_pet_goomer_score_var_time,10) * .03);
		document.getElementById("increase-groomer-speed-price").innerHTML = localStorage.Kitten_Petter_Groomer_Speed_Price;
	}
}

function SetUpData() {
	if(localStorage.Kitten_Petter_Score)
	{
		document.getElementById("score").innerHTML = localStorage.Kitten_Petter_Score;
		document.getElementById("increase-petting-price").innerHTML = localStorage.Kitten_Petter_Pet_Amount_Price;
		document.getElementById("pet-petter-price").innerHTML = localStorage.Kitten_Petter_Petter_Amount_Price;
		document.getElementById("pet-groomer-price").innerHTML = localStorage.Kitten_Petter_Groomer_Amount_Price;
		document.getElementById("increase-petter-speed-price").innerHTML = localStorage.Kitten_Petter_Petter_Speed_Price;
		document.getElementById("increase-groomer-speed-price").innerHTML = localStorage.Kitten_Petter_Groomer_Speed_Price;


	}
	else
	{
		localStorage.Kitten_Petter_Score = 0;
		localStorage.Kitten_Num_Pet_Petters = 0;
		localStorage.Kitten_Petter_Num_Pet_Groomers = 0;
		localStorage.Kitten_Petter_Pet_Amount = 1;
		localStorage.Kitten_Petter_Pet_Amount_Price = 50;
		localStorage.Kitten_Petter_Petter_Amount_Price = 10;
		localStorage.Kitten_Petter_Petter_Speed_Price = 10500;
		localStorage.Kitten_Petter_Groomer_Amount_Price = 1000;
		localStorage.Kitten_Petter_Groomer_Speed_Price = 50000;
		localStorage.Kitten_Petter_Score_Speed = 1000;
		localStorage.Kitten_Groomer_Score_Speed = 800;
	}
	update_score_var = setInterval(UpdateScore, update_score_var_time);
	if(parseInt(localStorage.Kitten_Num_Pet_Petters,10) > 0)
	{
		update_pet_petter_score_var = setInterval(UpdatePetPetterScore, parseInt(localStorage.Kitten_Petter_Score_Speed,10));
	}
	if(parseInt(localStorage.Kitten_Petter_Num_Pet_Groomers,10) > 0)
	{
		update_pet_groomer_score_var = setInterval(UpdatePetGroomerScore, parseInt(localStorage.Kitten_Groomer_Score_Speed,10));
	}
}