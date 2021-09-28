var channelID = "UCrvdN4QN6Zk7aUg7ZkiXH8Q";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL) + channelID, function (data) {
   var link = data.items[0].link;
   var id = link.substr(link.indexOf("=") + 1);
   $("#youtube_video").attr("href", "https://youtube.com/watch?v=" + id);
   var url = `https://www.youtube.com/embed/${id}`;

   let embebed = document.getElementById("youtubeVideo");
   embebed.src = url;

});

window.onscroll = () => { scrollFunction(); activeLink() };

//subraya el link correspondiente a la sección actual
const activeLink = () => {
   var st = $(this).scrollTop() + 20;


   $("section").each(function () {
      if (st > $(this).offset().top && st <= $(this).offset().top + $(this).height()) {
         var id = $(this).attr('id');
         $('a[href="#' + id + '"]').addClass('active');
      } else {
         var id = $(this).attr('id');
         $('a[href="#' + id + '"]').removeClass('active');
      }
   });
};




const scrollFunction = () => {
   if (screen.width > 767.98) {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
         document.getElementById("logo").style.width = "90px";
         document.getElementById("navbar").style.paddingTop = "10px";
         document.getElementById("navbar").style.backgroundColor = "white";
      }
      if (document.body.scrollTop < 80 && document.documentElement.scrollTop < 80) {
         document.getElementById("logo").style.width = "290px";
         document.getElementById("navbar").style.paddingTop = "70px";
         document.getElementById("navbar").style.backgroundColor = "initial";
      }
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
         document.getElementById("nav-link--inicio").style.display = "block";
      }
      if (document.body.scrollTop < 500 && document.documentElement.scrollTop < 500) {
         document.getElementById("nav-link--inicio").style.display = "none";
      }
   } else {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
         document.getElementById("logo").style.width = "90px";
         document.getElementById("navbar").style.paddingTop = "10px";
         document.getElementById("navbar").style.backgroundColor = "white";
      }
      if (document.body.scrollTop < 80 && document.documentElement.scrollTop < 80) {
         document.getElementById("logo").style.width = "200px";
         document.getElementById("navbar").style.paddingTop = "70px";
         document.getElementById("navbar").style.backgroundColor = "initial";
      }
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
         document.getElementById("nav-link--inicio").style.display = "block";
      }
      if (document.body.scrollTop < 500 && document.documentElement.scrollTop < 500) {
         document.getElementById("nav-link--inicio").style.display = "none";
      }
   }
}



