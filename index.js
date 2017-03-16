import { resolve } from 'path';
import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],

    uiExports: {
      
      app: {
        title: 'Elasticizer',
        description: 'For elasticization',
        main: 'plugins/elasticizer/app'
      },
      
      
      translations: [
        resolve(__dirname, './translations/es.json')
      ],
      
      
      hacks: [
        'plugins/elasticizer/hack'
      ]
      
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    
    init(server, options) {
      // Add server routes and initalize the plugin here
      exampleRoute(server);
    }
    

  });
};