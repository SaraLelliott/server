$(document).ready(function(){


    $("input#calculate").click(function(event){
        event.preventDefault();
        //Calculate BMI
        var gender = $("select#sex").val();
        var weight = $("input#weight").val();
        var height = $("input#height").val();
        console.log(weight);
        console.log(height);
        console.log(gender);
        //Clear any old information
        $("div#response").empty();
        //Check if valid Inputs
        if (!(200> weight > 0 && 200> height > 0) ) {
            $("div#response.row").append("<h6>You did not fill in the form correctly</h6");
        }
        else{
            var finalBmi = weight / (height / 100 * height / 100);
            $("div#response").append("<h6>Your BMI:</h6><p class=text-center>"+finalBmi.toFixed(2) +"</p>");
            //Give feedback about what it means
            $("div#response").append("<h6>This Means:</h6>");
            if (finalBmi < 18.5) {
                $("div#response").append("<p class=text-center>You are considered to be underweight</p>");
            }
            if (finalBmi > 18.5 && finalBmi < 25) {
                document.bmiForm.meaning.value =
                $("div#response").append("<p class=text-center>You are considered to be in the healthy weight range</p>");
            }
            if (finalBmi > 25) {
              $("div#response").append("<p class=text-center>You are considered to be overweight</p>");
            }

        }
        $("form").clearForm();

    });

    //Sourced from learningjquey.com
    $.fn.clearForm = function() {
      return this.each(function() {
        var type = this.type, tag = this.tagName.toLowerCase();
        if (tag == 'form')
          return $(':input',this).clearForm();
        if (type == 'text' || type == 'password' || tag == 'textarea')
          this.value = '';
        else if (type == 'checkbox' || type == 'radio')
          this.checked = false;
        else if (tag == 'select')
          this.selectedIndex = -1;
      });
    };




});