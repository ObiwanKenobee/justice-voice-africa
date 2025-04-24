
import { supabase } from "@/integrations/supabase/client";
import { Case } from "@/types/case";

export const casesService = {
  async getAllCases() {
    const { data, error } = await supabase
      .from('cases')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    // Ensure the status matches our expected type
    return data.map(item => ({
      ...item,
      status: item.status as Case['status']
    })) as Case[];
  },

  async getCaseById(id: string) {
    const { data, error } = await supabase
      .from('cases')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    
    // Ensure the status matches our expected type
    return {
      ...data,
      status: data.status as Case['status']
    } as Case;
  },

  async createCase(caseData: Omit<Case, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('cases')
      .insert([caseData])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async updateCase(id: string, caseData: Partial<Case>) {
    const { data, error } = await supabase
      .from('cases')
      .update(caseData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async deleteCase(id: string) {
    const { error } = await supabase
      .from('cases')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};
