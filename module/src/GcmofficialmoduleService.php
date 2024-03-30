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
            array_push($allowedRoles, "administrator");
        }
        return array_diff($allowedRoles, ["anonymous"]);
    }

}