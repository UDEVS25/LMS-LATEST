import React, { useState } from 'react';
import './ConfigSettings.css';

const ConfigSettings = () => {
  const [settings, setSettings] = useState({
    language: 'English',
    timeZone: 'UTC',
    allowNotifications: true,
    enable2FA: false,
    adminEmail: '',
    paymentGateway: 'None',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    // Save settings to backend API or local storage
    console.log('Settings saved:', settings);
    alert('Settings have been saved successfully!');
  };

  return (
    <div className="config-settings">
      <h1>Configuration Settings</h1>

      {/* General Settings Section */}
      <div className="settings-section">
        <h2>General Settings</h2>
        <div className="form-group">
          <label htmlFor="language">Default Language</label>
          <select name="language" value={settings.language} onChange={handleInputChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="timeZone">Time Zone</label>
          <select name="timeZone" value={settings.timeZone} onChange={handleInputChange}>
            <option value="UTC">UTC</option>
            <option value="EST">Eastern Standard Time (EST)</option>
            <option value="PST">Pacific Standard Time (PST)</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="allowNotifications"
              checked={settings.allowNotifications}
              onChange={handleInputChange}
            />
            Enable Notifications
          </label>
        </div>
      </div>

      {/* Security Settings Section */}
      <div className="settings-section">
        <h2>Security Settings</h2>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="enable2FA"
              checked={settings.enable2FA}
              onChange={handleInputChange}
            />
            Enable Two-Factor Authentication (2FA)
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="adminEmail">Admin Email</label>
          <input
            type="email"
            name="adminEmail"
            value={settings.adminEmail}
            onChange={handleInputChange}
            placeholder="Enter admin email"
          />
        </div>
      </div>

      {/* Integration Settings Section */}
      <div className="settings-section">
        <h2>Integration Settings</h2>
        <div className="form-group">
          <label htmlFor="paymentGateway">Payment Gateway</label>
          <select name="paymentGateway" value={settings.paymentGateway} onChange={handleInputChange}>
            <option value="None">None</option>
            <option value="PayPal">PayPal</option>
            <option value="Stripe">Stripe</option>
          </select>
        </div>
      </div>

      {/* Save Button */}
      <button className="save-button" onClick={handleSave}>
        Save Settings
      </button>
    </div>
  );
};

export default ConfigSettings;
