import './styles/Radio.scss';

export function Radio() {
  return (
    <div class="toggle-switch">
      <style>
      </style>
      <label class="switch-label">
        <input type="checkbox" class="checkbox" />
        <span class="slider"></span>
      </label>
    </div>
  );
}