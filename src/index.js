/* eslint-env browser, node */
/* eslint no-console: "off" */

import Application from './application';
import { default as $ } from 'jquery';

if (require.name !== module) {
    $(document).ready(function () {
        if (window.APP === undefined) {
            window.APP = new Application();
        }
    });
}
