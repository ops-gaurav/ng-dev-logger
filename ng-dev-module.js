var devModule = angular.module('devmodule', []);
devModule.factory('devlogger', ['$log', function($log) {
    return {
        log: function(message, timestamp = false) {
            if (timestamp)
                timestamp = new Date();
            else
                timestamp = '';
            $log.log("%c" + timestamp + 'LOG:: ' + message, "color: #383838;font-weight: bold");
        },
        success: function(message, timestamp = false) {
            if (timestamp)
                timestamp = new Date();
            else
                timestamp = '';
            $log.log("%c" + timestamp + 'SUCCESS:: ' + message, "color: green; font-weight: bold");
        },
        error: function(message, timestamp = false) {
            if (timestamp)
                timestamp = new Date();
            else
                timestamp = '';
            $log.log("%c" + timestamp + 'ERROR:: ' + message, "color: red; font-weight: bold");
        },
        info: function(message, timestamp = false) {
            if (timestamp)
                timestamp = new Date();
            else
                timestamp = '';
            $log.log("%c" + timestamp + 'INFO:: ' + message, 'color: blue; weight: bold');
        },
        warning: function(message, timestamp = false) {
            if (timestamp)
                timestamp = new Date();
            else
                timestamp = '';
            $log.log("%c" + timestamp + 'WARNING:: ' + message, 'color: brightblue;font-weight: bold;');
        },

        highlightLog: function(message, timestamp = false) {
            if (timestamp)
                timestamp = new Date();
            else
                timestamp = '';
            $log.log("%c" + timestamp + 'SUCCESS:: ' + message, 'color: #fff;background: #383838;font-weight: bold;padding: 3px;border-radius: 3px;');
        },
        highlightSuccess: function(message, timestamp = false) {
            if (timestamp)
                timestamp = new Date();
            else
                timestamp = '';
            $log.log("%c" + timestamp + 'SUCCESS:: ' + message, 'color: #fff;background: green;font-weight: bold;padding: 3px;border-radius: 3px;');
        },

        highlightError: function(message, timestamp = false) {
            if (timestamp)
                timestamp = new Date();
            else
                timestamp = '';
            $log.log("%c" + timestamp + 'WARNING:: ' + message, 'color: #fff;background: red;font-weight: bold;padding: 3px;border-radius: 3px;');
        },
        highlightInfo: function(message, timestamp = false) {
            if (timestamp)
                timestamp = new Date();
            else
                timestamp = '';
            $log.log("%c" + timestamp + 'INFO:: ' + message, 'color: #fff;background: blue;font-weight: bold;padding: 3px;border-radius: 3px;');
        },

        highlightWarning: function(message, timestamp = false) {
            if (timestamp)
                timestamp = new Date();
            else
                timestamp = '';
            $log.log("%c" + timestamp + 'WARNING:: ' + message, 'color: #fff;background: orange;font-weight: bold;padding: 3px;border-radius: 3px;');
        }
    };
}]);
