
import { useState, useEffect } from 'react';
import { Case } from '@/types/case';
import { casesService } from '@/services/casesService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CasesList() {
  const [cases, setCases] = useState<Case[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCases();
  }, []);

  const loadCases = async () => {
    try {
      const data = await casesService.getAllCases();
      setCases(data);
    } catch (error) {
      console.error('Error loading cases:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this case?')) {
      try {
        await casesService.deleteCase(id);
        setCases(cases.filter(c => c.id !== id));
      } catch (error) {
        console.error('Error deleting case:', error);
      }
    }
  };

  return (
    <div className="space-y-4">
      <Button onClick={() => navigate('/cases/new')} className="mb-4">
        Create New Case
      </Button>
      
      {cases.map((caseItem) => (
        <Card key={caseItem.id} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>{caseItem.title}</span>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => navigate(`/cases/edit/${caseItem.id}`)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button 
                  variant="destructive" 
                  size="icon"
                  onClick={() => handleDelete(caseItem.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{caseItem.description}</p>
              <div className="flex justify-between text-sm">
                <span className="font-medium">Status: {caseItem.status}</span>
                <span>{new Date(caseItem.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
