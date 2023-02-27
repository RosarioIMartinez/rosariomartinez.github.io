<script>
  var script = document.createElement("script");
  script.addEventListener("load", function(event) {
    console.log("Script terminó de cargarse y ejecutarse");
  });
  script.src = "http://example.com/example.js";
  script.async = true;
  document.getElementsByTagName("script")[0].parentNode.appendChild(script);
</script>
