'use strict';

// Configuring in the Core module
angular.module('core').run(['Menus', function (Menus) {
    // Menus.addMenuItem(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position);
    // Menus.addSubMenuItem(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position);

    // Set top bar menu items
    Menus.addMenuItem('topbar', 'Studio', 'studio', 'dropdown', '/studio');

    Menus.addMenuItem('topbar', 'Leistungen', 'leistungen', 'dropdown', '/leistungen');
    Menus.addSubMenuItem('topbar', 'leistungen', 'Fußpflege', 'leistungen/fusspflege');
    Menus.addSubMenuItem('topbar', 'leistungen', 'Handpflege', 'leistungen/handpflege');
}]);