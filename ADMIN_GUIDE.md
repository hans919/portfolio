# Portfolio Admin Panel

## Overview
This portfolio website now includes a comprehensive admin panel that allows you to edit all content dynamically without touching the code.

## Features
- **Secure Login**: Password-protected admin access
- **Edit About Section**: Update main text, expanded text, and expertise tags
- **Manage Projects**: Add, edit, or delete project entries
- **Manage Experience**: Add, edit, or delete work experience and education
- **Manage Certifications**: Add, edit, or delete certifications and awards
- **Manage Tech Stack**: Add, edit, or delete technologies with categories

## How to Access

1. **Start the Development Server**
   ```bash
   npm run dev
   ```

2. **Access Admin Panel**
   - Navigate to: `http://localhost:5173/admin`
   - Or click the "Admin" button in the top-right corner of your portfolio

3. **Login Credentials**
   - Default Password: `admin123`
   - To change: Edit `src/contexts/AuthContext.tsx` and update the `ADMIN_PASSWORD` constant

## How to Use

### Login
1. Go to `/admin/login` or click the Admin button
2. Enter the password: `admin123`
3. Click "Login"

### Edit Content

#### About Section
- Edit main about text (supports HTML tags like `<strong>`)
- Edit expanded "Read More" text
- Add/remove expertise tags
- Click "Save Changes" when done

#### Projects
- Click "+ Add Project" to create new entries
- Fill in: Title, Description, Link, Icon URL
- Click "Delete" to remove a project
- Click "Save Changes" when done

#### Experience
- Click "+ Add Experience" to create new entries
- Fill in: Title, Company, Period, Type (Work/Education)
- Click "Delete" to remove an entry
- Click "Save Changes" when done

#### Certifications
- Click "+ Add Certification" to create new entries
- Fill in: Title, Description, Link
- Click "Delete" to remove a certification
- Click "Save Changes" when done

#### Tech Stack
- Click "+ Add Technology" to create new entries
- Fill in: Name, Icon URL, Category (Frontend/Backend/Database/Tools)
- Click "×" to remove a technology
- Click "Save Changes" when done

### Navigation
- Use the sidebar to switch between sections
- Click "View Portfolio" to see your live changes
- Click "Logout" to exit the admin panel

## Data Storage

All changes are saved to:
- **localStorage**: For browser persistence
- **Initial data**: `src/data/portfolioData.json`

### Backup Your Data
Your changes persist in the browser's localStorage. To backup:
1. Open browser DevTools (F12)
2. Go to Application > Local Storage
3. Find `portfolioData` key
4. Copy the JSON value

### Reset to Default
To reset all content to defaults:
1. Clear browser localStorage
2. Refresh the page

## Customization

### Change Admin Password
Edit `src/contexts/AuthContext.tsx`:
```typescript
const ADMIN_PASSWORD = 'your-new-password'
```

### Modify UI Colors
The admin panel uses the same CSS variables as your portfolio:
- `--accent-color`
- `--bg-primary`
- `--bg-secondary`
- `--text-primary`
- `--text-secondary`
- `--border-color`

## Security Notes

⚠️ **Important**: This is a client-side admin panel suitable for development or personal portfolios. For production:

1. **Not Recommended for Public Sites**: Anyone can view the source and find the password
2. **For Production**: Consider:
   - Backend authentication with JWT
   - Database storage instead of localStorage
   - Environment variables for credentials
   - Server-side validation

## Troubleshooting

### Changes Not Saving
- Check browser console for errors
- Ensure localStorage is enabled
- Try clearing localStorage and re-entering data

### Can't Login
- Verify password is correct
- Check `src/contexts/AuthContext.tsx` for the password
- Clear browser cookies and try again

### Lost Data
- Check browser's localStorage
- Copy data from `portfolioData` key
- Restore from `src/data/portfolioData.json`

## Future Enhancements

Consider adding:
- Image upload functionality
- Export/Import data as JSON
- Backend integration with database
- Multi-user support with roles
- Change password feature
- Activity logs
