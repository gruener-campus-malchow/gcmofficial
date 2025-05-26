<?php

namespace Drupal\gcmofficialmodule;

class GcmofficialmoduleService {

    public function get_config(string $config) {
        $moduleSettings = \Drupal::config('gcmofficialmodule.settings');

        return $moduleSettings->get($config);
    }

    public function intersect(array $check, array $haystack) {
        $allowed = false;
        foreach ($check as $needle) {
            if (in_array($needle, $haystack)) {
                $allowed = true;
                break;
            }
        }
        return $allowed;
    }

    public function get_allowed_roles_from_config(string $config) {
        $allowedRoles = explode(', ', $this->get_config($config));
        if (!in_array("administrator", $allowedRoles)) {
            array_push($allowedRoles, "administrator"); // ensure that admin has all rights
        }
        return array_diff($allowedRoles, ["anonymous"]); // ensure that users not signed in have no rights
    }

    public function user_is_allowed(\Drupal\Core\Session\AccountProxyInterface $user, string $config) {
        $roles = $user->getRoles();
        $allowedRoles = $this->get_allowed_roles_from_config($config);
        $allowed = $this->intersect($allowedRoles, $roles);
        return $allowed;
    }

}