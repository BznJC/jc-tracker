FitnessList = new Mongo.Collection('jcDocuments');


if (Meteor.isClient) {

    // Helper functions start here

      Template.tracker.helpers({
        'myData': function(){
          return FitnessList.find({})
        },

        'bodyFat': function(){

        }

      }); 

    // Events start here

      Template.addDataForm.events({
        'submit form': function(){
            event.preventDefault();
            var bodyFatVar = event.target.bodyFat.value;
            var testDate = event.target.date.value;
            FitnessList.insert({
              date: testDate,
              percentage: bodyFatVar,  
            });
          }
      });

}



if (Meteor.isServer) {

}
