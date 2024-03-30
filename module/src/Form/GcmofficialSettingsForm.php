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
      '#description' => $this->t('Geben Sie hier die <em>Systemnamen</em> der Benuzerrollen ein, die zur Änderung des Felds Hohe Priorität bei Artikeln und Projekten berechtigt sind. Geben Sie eine Komma-seperierte (Komma+Leerzeichen: ", ") Liste an: rolle1, rolle2, ... .'),
    ];
    $form['users_change_schulidentitaet'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Berechtigung zur Änderung des Felds Schulidentität'),
      '#default_value' => $config->get('users_change_schulidentitaet'),
      '#description' => $this->t('Geben Sie hier die <em>Systemnamen</em> der Benuzerrollen ein, die zur Änderung des Felds Schulidentität bei Projekten berechtigt sind. Geben Sie eine Komma-seperierte (Komma+Leerzeichen: ", ") Liste an: rolle1, rolle2, ... .'),
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);

    // Make sure that these configs are comma seperated lists
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
    );
    foreach ($keys as $key) {
      $config->set($key, $form_state->getValue($key));
    }
    $config->save();

    parent::submitForm($form, $form_state);
  }
    
}