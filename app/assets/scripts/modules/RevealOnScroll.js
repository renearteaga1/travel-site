import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }
    
    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }
    
    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function() {
            var currentItem = this;
           new Waypoint({
               element: currentItem, // new Waypoint is creating a new elemnt and this would reffer to itself, empty.
               handler: function(){
                   $(currentItem).addClass("reveal-item--is-visible");
               },
               offset: that.offsetPercentage
           });
        });
    }
}

export default RevealOnScroll;