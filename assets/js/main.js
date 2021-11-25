import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";

(function () {
  Alpine.plugin(intersect);
  window.Alpine = Alpine;
  Alpine.start();
})();
