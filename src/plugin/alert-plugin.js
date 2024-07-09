
import AlertComponent from './AlertComponent.vue';
const AlertService = {
  install(Vue) {
    Vue.prototype.$alert = function(options) {
      const { message, duration = 5000, severity = 'info', summary, closeAble, icon, enableSound } = options;

      const AlertConstructor = Vue.extend(AlertComponent);
      const alertInstance = new AlertConstructor({
        propsData: {
          message,
          severity,
          duration,
          summary,
          closeAble,
          icon,
          enableSound
        }

      });
      
      alertInstance.$on('onHide', () => {        
        alertInstance.$destroy();
        alertInstance.$el.remove();
      });
      alertInstance.$mount();
      if(!document.getElementById('alertsfortheapp')){
        let div = document.createElement('div');
        div.setAttribute( "id", "alertsfortheapp");
        document.body.appendChild(div);
      }
      document.getElementById('alertsfortheapp').prepend(alertInstance.$el);
    };
  }
};

export default AlertService;
