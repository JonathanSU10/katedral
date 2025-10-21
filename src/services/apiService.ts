// API service for handling requests to the backend
const API_BASE_URL = '/api';

class ApiService {
  // Get announcements for the public announcements page
  static async getAnnouncements() {
    try {
      const response = await fetch(`${API_BASE_URL}/announcements`);
      if (!response.ok) {
        throw new Error('Failed to fetch announcements');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching announcements:', error);
      throw error;
    }
  }

  // Get a specific announcement by ID
  static async getAnnouncementById(id: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/announcements/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch announcement');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching announcement:', error);
      throw error;
    }
  }

  // Create a new announcement (admin only)
  static async createAnnouncement(title: string, content: string, token: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/announcements`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({ title, content })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Failed to create announcement');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error creating announcement:', error);
      throw error;
    }
  }

  // Update an announcement (admin only)
  static async updateAnnouncement(id: number, title: string, content: string, token: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/announcements/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({ title, content })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Failed to update announcement');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error updating announcement:', error);
      throw error;
    }
  }

  // Delete an announcement (admin only)
  static async deleteAnnouncement(id: number, token: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/announcements/${id}`, {
        method: 'DELETE',
        headers: {
          'x-auth-token': token
        }
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Failed to delete announcement');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error deleting announcement:', error);
      throw error;
    }
  }
}

export default ApiService;