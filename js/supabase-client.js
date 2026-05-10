/**
 * L'Envol Arts Aériens - Supabase & Mindbody Service Abstraction
 * This file handles all backend interactions, designed to be swapped with actual Mindbody API calls later.
 */

const SUPABASE_URL = 'https://qjyvwzdmhlgfdtsukkud.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_fFUGneNyYDhLUA-_IDZR2Q_IqrDb6gA';

// Initialize the Supabase client
// Note: The supabase variable is globally available if the CDN script is loaded before this.
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.mindbodyService = {
    // AUTHENTICATION
    async login(email, password) {
        return await _supabase.auth.signInWithPassword({ email, password });
    },
    async register(email, password, fullName) {
        return await _supabase.auth.signUp({
            email,
            password,
            options: {
                data: { full_name: fullName }
            }
        });
    },
    async loginWithGoogle() {
        return await _supabase.auth.signInWithOAuth({ 
            provider: 'google',
            options: {
                redirectTo: window.location.origin + '/espace-client.html'
            }
        });
    },
    async logout() {
        const { error } = await _supabase.auth.signOut();
        if (!error) window.location.href = 'espace-client.html';
        return { error };
    },
    async getCurrentUser() {
        const { data: { user } } = await _supabase.auth.getUser();
        if (!user) return null;
        
        const { data: profile } = await _supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();
            
        return { ...user, ...profile };
    },

    // CLASSES / SCHEDULE
    async getClasses() {
        return await _supabase
            .from('classes')
            .select('*')
            .order('start_date_time', { ascending: true });
    },
    async getClassesByCoach(staffName) {
        return await _supabase
            .from('classes')
            .select('*')
            .eq('staff_name', staffName)
            .order('start_date_time', { ascending: true });
    },


    // VISITS / BOOKINGS
    async getClientVisits(clientId) {
        return await _supabase
            .from('visits')
            .select('*, classes(*)')
            .eq('client_id', clientId)
            .order('created_at', { ascending: false });
    },
    async bookClass(clientId, classId) {
        const { data, error } = await _supabase
            .from('visits')
            .insert([{ client_id: clientId, class_id: classId, status: 'booked' }]);
            
        if (!error) {
            await _supabase.rpc('increment_booked', { row_id: classId });
        }
        return { data, error };
    },

    // SALES / TRANSACTIONS
    async getClientSales(clientId) {
        return await _supabase
            .from('sales')
            .select('*')
            .eq('client_id', clientId)
            .order('created_at', { ascending: false });
    },
    async addMockFunds(clientId, amount) {
        const { error: saleError } = await _supabase
            .from('sales')
            .insert([{ client_id: clientId, amount, description: 'Dépôt de fonds (Mock Presentation)' }]);
            
        if (saleError) return { error: saleError };

        // Fetch current balance
        const { data: profile } = await _supabase.from('profiles').select('balance').eq('id', clientId).single();
        const newBalance = (parseFloat(profile.balance) || 0) + amount;

        return await _supabase.from('profiles').update({ balance: newBalance }).eq('id', clientId);
    },

    // REVIEWS
    async getReviewsForClass(classId) {
        return await _supabase
            .from('reviews')
            .select('*, profiles(full_name)')
            .eq('class_id', classId);
    },
    async submitReview(clientId, classId, rating, comment) {
        return await _supabase
            .from('reviews')
            .insert([{ client_id: clientId, class_id: classId, rating, comment }]);
    },

    // ADMIN / SUPER USER
    async getAllProfiles() {
        return await _supabase
            .from('profiles')
            .select('*')
            .order('full_name', { ascending: true });
    },
    async updateProfileRole(userId, newRole) {
        return await _supabase
            .from('profiles')
            .update({ role: newRole })
            .eq('id', userId);
    }
};

