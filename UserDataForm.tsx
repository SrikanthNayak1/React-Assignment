import { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';

export default function UserDataForm() {
  const [formData, setFormData] = useState({
    id: Date.now().toString(),
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsDirty(true);
  };

  const handleSubmit = () => {
    localStorage.setItem('userData', JSON.stringify(formData));
    setIsDirty(false);
    alert('User data saved!');
  };

  return (
    <div>
      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} />
      <TextField label="Address" name="address" value={formData.address} onChange={handleChange} />
      <TextField label="Email" name="email" value={formData.email} onChange={handleChange} />
      <TextField label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
      <Button onClick={handleSubmit}>Save</Button>
    </div>
  );
}
