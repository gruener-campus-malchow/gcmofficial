<?php

namespace Drupal\gcmofficialmodule\Form;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Enable configuration of settings for this module through Drupal UI
 */
class GcmofficialSettingsForm extends ConfigFormBase {

  /**
   * Config settings.
   *
   * @var string
   */
  const SETTINGS = 'gcmofficialmodule.settings';

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'gcmofficialmodule_admin_settings';
  }

  /**
   * {@inheritdoc}
   */
  
  protected function getEditableConfigNames() {
    return [
      static::SETTINGS,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config(static::SETTINGS);

    $form['users_change_stufe'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Erweiterte Berechtigungen zur Änderung der Unterrichts- und Lernangebotsseiten'),
      '#default_value' => $config->get('users_change_stufe'),
      '#description' => $this->t('Geben Sie hier die <em>Systemnamen</em> der Benuzerrollen ein, die zur Änderung des Titels und der Jahrgänge auf den Seiten der Unterrichts- und Lernangebote berechtigt sind. Geben Sie eine Komma-seperierte (Komma+Leerzeichen: ", ") Liste an: rolle1, rolle2, ... .'),
    ];
    $form['users_change_prioritaet'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Berechtigung zur Änderung des Felds Hohe Priorität'),
      '#default_value' => $config->get('users_change_prioritaet'),
      '#description' => $this->t('Geben Sie hier die <em>Systemnamen</em> der Benuzerrollen ein, die zur Änderung des Felds Hohe Priorität (field_prioritaet) bei Artikeln und Projekten berechtigt sind. Geben Sie eine Komma-seperierte (Komma+Leerzeichen: ", ") Liste an: rolle1, rolle2, ... .'),
    ];
    $form['users_change_schulidentitaet'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Berechtigung zur Änderung des Felds Schulidentität'),
      '#default_value' => $config->get('users_change_schulidentitaet'),
      '#description' => $this->t('Geben Sie hier die <em>Systemnamen</em> der Benuzerrollen ein, die zur Änderung des Felds Schulidentität (field_schulidentitaet) bei Projekten berechtigt sind. Geben Sie eine Komma-seperierte (Komma+Leerzeichen: ", ") Liste an: rolle1, rolle2, ... .'),
    ];
    $form['views_filter_change_created'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Ansichten Filter mit Feld Geschrieben am'),
      '#default_value' => $config->get('views_filter_change_created'),
      '#description'=> $this->t('Geben Sie hier die IDs der Ansichten-Filter an, welche einen Wrapper für das Feld Geschrieben am (created) aufweisen und verändert werden sollen. Geben Sie eine Komma-seperierte (Komma+Leerzeichen: ", ") Liste an: id1, id2, ... .'),
    ];
    $form['views_filter_change_tags'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Ansichten Filter mit Feld Thematik'),
      '#default_value' => $config->get('views_filter_change_tags'),
      '#description'=> $this->t('Geben Sie hier die IDs der Ansichten-Filter an, welche einen Wrapper für das Feld Thematik (field_tags) aufweisen und verändert werden sollen. Geben Sie eine Komma-seperierte (Komma+Leerzeichen: ", ") Liste an: id1, id2, ... .'),
    ];
    $form['views_filter_change_projekt'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Ansichten Filter mit Feldern Beginn und Ende (Projekt)'),
      '#default_value' => $config->get('views_filter_change_projekt'),
      '#description'=> $this->t('Geben Sie hier die IDs der Ansichten-Filter an, welche die Felder Beginn (field_beginn) und Ende (field_ende) aufweisen und verändert werden sollen. Geben Sie eine Komma-seperierte (Komma+Leerzeichen: ", ") Liste an: id1, id2, ... .'),
    ];
    $form['compare_time_field'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Errechnetes Feld des Inhaltstypenübergreifenden Zeitvergleichs'),
      '#default_value' => $config->get('compare_time_field'),
      '#description' => $this->t('Geben Sie hier den <em>Systemnamen</em> des Felds an, in welchem automatisch der Zeit-Wert gespeichert werden soll, der für die Sortierung in Ansichten genutzt wird. Betroffene Inhaltstypen müssen dieses Feld bereits aufweisen, es kann jedoch leer gelassen werden.'),
    ];
    $form['compare_time_date_fields'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Felder für den Inhaltstypenübergreifenden Zeitvergleich'),
      '#default_value' => $config->get('compare_time_date_fields'),
      '#description' => $this->t('Geben Sie hier ein JSON-Objekt in der Form - Inhaltstyp<em>(Systemname)</em>: Feld<em>(Systemname)</em> - an. Das angegebene Feld muss ein Datumsfeld oder DateTime-Feld sein und im Inhaltstyp vorhanden sein. Es sollte, muss jedoch nicht, gefüllt sein.'),
    ];
    $form['url_alias_field_tags'] = [
      '#type' => 'textfield',
      '#title' => $this->t('URL Alias: Taxonomie-Begriffs Feld'),
      '#default_value' => $config->get('url_alias_field_tags'),
      '#description' => $this->t('Geben Sie hier den <em>Systemnamen</em> des Felds an, in welchem die Taxonomie-Begriffe stehen, die für die Änderung der URL Aliase verwendet werden sollen. Betroffene Inhaltstypen müssen dieses Feld bereits aufweisen.'),
    ];
    $form['url_alias_search_for'] = [
      '#type' => 'textfield',
      '#title' => $this->t('URL Alias: Platzhalter'),
      '#default_value' => $config->get('url_alias_search_for'),
      '#description' => $this->t('Geben Sie hier den Platzhalter an, nachdem in den URL Aliasen gesucht wird und der je nach Taxonomie-Begriff verändert wird.'),
    ];
    $form['url_alias_replace_with'] = [
      '#type' => 'textarea',
      '#title' => $this->t('URL-Alias: Ersetzen mit'),
      '#default_value' => $config->get('url_alias_replace_with'),
      '#description' => $this->t('Geben Sie hier ein JSON-Objekt in der Form - Taxonomie-Begriff: URL-Fragment - an. Weist ein Inhalt keinen der angegebenen Begriffe auf, wird der Platzhalter nicht mit einem URL-Fragment ersetzt, sondern bleibt bestehen.'),
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);

    // make sure that these configs are comma seperated lists
    $csep = array(
      'users_change_stufe',
      'users_change_prioritaet',
      'users_change_schulidentitaet',
    );
    foreach ($csep as $key) {
      if (preg_match('/^([a-z]+, )*[a-z]+$/', $form_state->getValue($key)) != 1) {
        $form_state->setErrorByName($key, t('Bitte geben Sie eine Komma-seperierte Liste an!'));
      }
    }

    $csepid = array(
      'views_filter_change_created',
      'views_filter_change_tags',
      'views_filter_change_projekt',
    );
    foreach ($csepid as $key) {
      if (preg_match('/^([a-z\-\d]+, )*[a-z\-\d]+$/', $form_state->getValue($key)) != 1) {
        $form_state->setErrorByName($key, t('Bitte geben Sie eine Komma-seperierte Liste an!'));
      }
    }

    // make sure that these configs contain only one field
    $singlefields = array(
      'compare_time_field',
      'url_alias_field_tags',
    );
    foreach ($singlefields as $key) {
      if (preg_match('/^[a-z_]+$/', $form_state->getValue($key)) != 1) {
        $form_state->setErrorByName($key, t('Bitte geben Sie den Systemnamen (nur) eines Feldes an!'));
      }
    }

    if (preg_match('/^[a-z_\-]+$/', $form_state->getValue('url_alias_search_for')) != 1) {
      $form_state->setErrorByName('url_alias_search_for', t('Bitte geben Sie ein gültiges Pathauto URL-Alias Fragment an!'));
    }

    // make sure these configs are valid json objects
    $check_json = json_decode($form_state->getValue("compare_time_date_fields"), true);
    if (is_null($check_json)) {
      $form_state->setErrorByName("compare_time_date_fields", t("Bitte geben Sie ein gültiges JSON-Objekt an!"));
    } else {
      foreach($check_json as $key => $val) {
        if (preg_match('/^[a-z_]+$/', $key) != 1 || preg_match('/^[a-z_]+$/', $val) != 1) {
          $form_state->setErrorByName("compare_time_date_fields", t("Bitte geben Sie ein gültiges JSON-Objekt an!"));
        }
      }
    }

    $check_json_url = json_decode($form_state->getValue("url_alias_replace_with"), true);
    if (is_null($check_json_url)) {
      $form_state->setErrorByName("url_alias_replace_with", t("Bitte geben Sie ein gültiges JSON-Objekt an!"));
    } else {
      foreach(array_values($check_json_url) as $val) {
        if (preg_match('/^[a-z_\-]+$/', $val) != 1) {
          $form_state->setErrorByName("url_alias_replace_with", t("Bitte geben Sie ein gültiges JSON-Objekt an!"));
        }
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config(static::SETTINGS);

    $keys = array(
      'users_change_stufe',
      'users_change_prioritaet',
      'users_change_schulidentitaet',
      'views_filter_change_created',
      'views_filter_change_tags',
      'views_filter_change_projekt',
      'compare_time_field',
      'compare_time_date_fields',
      'url_alias_field_tags',
      'url_alias_search_for',
      'url_alias_replace_with',
    );
    foreach ($keys as $key) {
      $config->set($key, $form_state->getValue($key));
    }
    $config->save();

    parent::submitForm($form, $form_state);
  }
    
}