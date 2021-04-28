function cityClick() {
  $( "#maps" ).empty();
  var inp = $('.city option:selected').val();
  console.log(inp);
  if (inp =="NY") {
    console.log("heyNY");
      $( "#maps" ).append("<iframe id=\"New York\" src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d48393.17582533143!2d-74.00031458055048!3d40.70539013023494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sredemption%20center!5e0!3m2!1sen!2sus!4v1619625535797!5m2!1sen!2sus" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
}
  if (inp =="Ch") {
    console.log("heyCh");
        $( "#maps" ).append("<iframe id=\"Chicago\"src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d380508.638412515!2d-88.01215436051969!3d41.834246603358814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sredemption%20center!5e0!3m2!1sen!2sus!4v1619625602210!5m2!1sen!2sus" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
      }

  if (inp =="MI") {
    console.log("heyMI");
      $( "#maps" ).append("<iframe id=\"Miami\" src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d114964.12229408263!2d-80.2994991981854!3d25.78282093478597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sredemption%20center!5e0!3m2!1sen!2sus!4v1619625671379!5m2!1sen!2sus" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
    }

  if (inp =="SF"){
    console.log("heySF")
      $( "#maps" ).append("<iframe id=\"San Francisco\" src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d100939.67173300724!2d-122.50764043316778!3d37.758044989361444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sredemption%20center!5e0!3m2!1sen!2sus!4v1619625730142!5m2!1sen!2sus" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
  }

}
